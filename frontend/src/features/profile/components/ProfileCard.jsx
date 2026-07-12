function ProfileCard({ profile }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center">
        <img
          src={profile.image}
          alt={profile.name}
          className="h-36 w-36 rounded-full border-4 border-blue-100 object-cover"
        />
        <h2 className="mt-5 text-2xl font-bold">{profile.name}</h2>

        <p className="mt-2 text-slate-500">{profile.role}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
