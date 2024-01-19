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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import * as z from "zod";
import { getAllCategories } from "@/functions/http/categories";
import { AxiosError } from "axios";
import type { ApiResponseError } from "@/types/ApiResponseError";
import { CreateSubCategoryDto, addSubCategory } from "@/functions/http/sub-categories";
import { TokenContext } from "../providers/TokenProvider";

const formSchema = z.object({
  name: z.string().min(1, { message: "Sub-category's name is required!" }),
  description: z.string().min(1, { message: "Sub-category's description is required!" }),
  category: z.string().min(1, { message: "Please select a category!" }),
});

export const AddSubCategoryModal: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const token = useContext(TokenContext);

  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", description: "", category: "" },
  });

  const closeModal = () => {
    setOpen(false);
    form.reset();
  };

  const { data: result } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getAllCategories(token),
  });

  const mutation = useMutation({
    mutationFn: async (dto: CreateSubCategoryDto) => await addSubCategory(dto, token),
    onError: (error: AxiosError<ApiResponseError>) => {
      toast.error(`${error.response?.data.message}`, { position: "top-center" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sub-categories"] });
      closeModal();
      toast.success("Successfully added new category", {
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
        disableOutsideClick
        onModalClose={closeModal}
        title="Add Category"
        description="This will add a new category"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <FormField
              control={form.control}
              name="category"
              render={({ field, fieldState }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      Category<span className="ml-1 text-rose-700">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {result?.data.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {!fieldState.error ? (
                      <FormDescription>
                        The category where this sub-category belongs.
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
              name="name"
              render={({ field, fieldState }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      Sub-category<span className="ml-1 text-rose-700">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name of the sub-category..." {...field} />
                    </FormControl>
                    {!fieldState.error ? (
                      <FormDescription>
                        This will serve as the sub-category&apos;s display name.
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
                        placeholder="Enter description for this sub-category..."
                        {...field}
                      />
                    </FormControl>
                    {!fieldState.error ? (
                      <FormDescription>
                        Please include a description relevant to this sub-category.
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
