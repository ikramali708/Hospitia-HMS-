import Button from "../../../components/ui/Button";

function ProfileInfo({ profile, onEdit }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-semibold">Personal Information</h2>

      <div className="space-y-6">
        <div>
          <p className="text-sm text-slate-500">Full Name</p>

          <h3 className="text-lg font-medium">{profile.name}</h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">Email</p>

          <h3 className="text-lg font-medium">{profile.email}</h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">Phone</p>

          <h3 className="text-lg font-medium">{profile.phone}</h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">Address</p>

          <h3 className="text-lg font-medium">{profile.address}</h3>
        </div>
      </div>

      <div className="mt-10">
        <Button onClick={onEdit}>Edit Profile</Button>
      </div>
    </div>
  );
}

export default ProfileInfo;
