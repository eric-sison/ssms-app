"use client";

import { FunctionComponent, useState } from "react";
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
import dayjs from "dayjs";
import { addCategory } from "@/functions/http/categories";

const formSchema = z.object({
  name: z.string().min(1, { message: "Category's name is required!" }),
  description: z.string().min(1, { message: "Category's description is required!" }),
});

export const AddCategoryModal: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

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
    mutationFn: addCategory,
    onError: (error) => console.log(error),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      closeModal();
    },
    onSettled: (data) => {
      toast("New category has been added", {
        description: dayjs(data?.data.createdAt as Date).format("dddd, MMMM D, YYYY"),
        position: "top-center",
        action: {
          label: "Okay",
          onClick: () => toast.dismiss(),
        },
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
        title="Add Category"
        description="This will add a new category"
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
                      Category Name<span className="ml-1 text-rose-700">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the name of the category..." {...field} />
                    </FormControl>
                    {!fieldState.error ? (
                      <FormDescription>
                        This will serve as the category&apos;s display name.
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
                        placeholder="Enter description for this category..."
                        {...field}
                      />
                    </FormControl>
                    {!fieldState.error ? (
                      <FormDescription>
                        Please include a description relevant to this category.
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