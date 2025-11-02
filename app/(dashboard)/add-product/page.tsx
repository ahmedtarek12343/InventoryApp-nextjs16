import AddProductForm from "@/components/AddProductForm";
const AddProductPage = async () => {
  return (
    <div>
      <main className="p-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl font-semibold mb-1">Add Products</h1>
              <p className="text-sm">Add a new product to your inventory</p>
            </div>
          </div>
        </div>
        <div className="max-w-2xl bg-card md:m-5 mt-2">
          <div className=" rounded-lg border  p-6">
            <AddProductForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProductPage;
