import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
async function createNewProduct(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  console.log(name);
}
const page = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">
        <form action={createNewProduct}>
          <div className="mb-4">
            <Label htmlFor="name" className="mb-2 font-normal">
              product name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="add product"
            />
          </div>
          <Button
            className="bg-blue-500 hover:bg-blue-400 transition-all duration-150 cursor-pointer text-blue-100"
            type="submit"
            size={"sm"}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default page;
