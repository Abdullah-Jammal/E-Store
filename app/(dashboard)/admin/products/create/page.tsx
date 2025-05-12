import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import SubmitButton from "@/components/form/SubmitButton";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProduct } from "@/utils/actions";

const page = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProduct}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              name="name"
              type="text"
              defaultValue=""
              label="product name"
            />

            <PriceInput name={"price"} defaultValue={0} />
            <ImageInput name="image" />
            <TextAreaInput name="description" labelText="product details" />
            <CheckboxInput
              label="featured product"
              name="featured"
              defaultChecked={false}
            />

            <SubmitButton
              text="submit"
              className="bg-blue-500 text-white capitalize w-full"
            />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};

export default page;
