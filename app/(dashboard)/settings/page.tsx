import { AccountSettings } from "@stackframe/stack";

const SettingsPage = () => {
  return (
    <main className="p-4">
      <div className="w-full">
        <div className=" rounded-lg border p-6">
          <AccountSettings fullPage />
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
