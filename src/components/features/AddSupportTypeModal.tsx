"use client";

import { FunctionComponent, useContext, useState } from "react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSupportType } from "@/functions/http/support-types";
import { toast } from "sonner";
import * as z from "zod";
import { AxiosError } from "axios";
import type { ApiResponseError } from "@/types/ApiResponseError";
import { SupportType } from "@/types/SupportType";
import { TokenContext } from "../providers/TokenProvider";

const formSchema = z.object({
  name: z.string().min(1, { message: "Support type's name is required!" }),
  description: z.string().min(1, { message: "Support type's description is required!" }),
});

export const AddSupportTypeModal: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const token = useContext(TokenContext);

  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", description: "" },
  });

  const closeModal = () => {
    setOpen(false);
    form.reset();
  };

  const mutation = useMutation({
    mutationFn: async (dto: Pick<SupportType, "name" | "description">) =>
      await addSupportType(dto, token),
    onError: (error: AxiosError<ApiResponseError>) => {
      toast.error(`${error.response?.data.message}`, { position: "top-center" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["support-types"] });
      closeModal();
      toast.success("Successfully added new support type", {
        position: "top-center",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Add New
      </Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        onModalClose={closeModal}
        title="Add New"
        description="This will add a new support type"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      Display Name<span className="ml-1 text-rose-700">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the name of support type..." {...field} />
                    </FormControl>
                    {!fieldState.error ? (
                      <FormDescription>
                        This will serve as the support type&apos;s display name.
                      </FormDescription>
                    ) : (
                      <FormMessage />
                    )}
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      Description<span className="ml-1 text-rose-700">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Enter description for this support type..."
                        {...field}
                      />
                    </FormControl>
                    {!fieldState.error ? (
                      <FormDescription>
                        Please include a description relevant to this type of support.
                      </FormDescription>
                    ) : (
                      <FormMessage />
                    )}
                  </FormItem>
                );
              }}
            />

            <div className="flex justify-end items-center gap-3">
              <Button type="button" variant="ghost" onClick={closeModal}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </Modal>
    </>
  );
};
