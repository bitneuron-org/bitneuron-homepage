import { TeamMember } from "config/constants/types";
import { teamMembers } from "config/constants/constant";
import { Avatar } from "@mui/material";

const avatarSize = 120;
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: avatarSize,
      height: avatarSize,
      "font-size": 64,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const TeamMemberTemplate = ({ name, role, image, bio }: TeamMember, index) => {
  return (
    <div
      className="relative flex flex-col min-w-0 break-words rounded-lg items-center my-3 h-full"
      key={`member-${index}`}
    >
      {image ? (
        <Avatar sx={{ width: avatarSize, height: avatarSize }} src={image} alt={`${name}`} />
      ) : (
        <Avatar {...stringAvatar(name)} />
      )}

      <p className="text-[32px] sm:text-2xl sm:leading-tight mt-3">{name}</p>
      <p className="text-[16px] font-bold sm:text-xl sm:leading-tight">{role}</p>
      <p className="text-[16px] sm:text-md text-center sm:leading-tight max-w-[240px] my-auto">
        {bio}
      </p>
    </div>
  );
};

const teamMemberCards = teamMembers.map((teamMember: TeamMember, index: number) =>
  TeamMemberTemplate(teamMember, index),
);

const Team = () => (
  <div className="flex flex-col team-page pt-16 max-w-6xl m-auto items-center">
    <h1 className="mt-16 font-bold text-5xl leading-tight">Our Team</h1>
    <p className="text-2xl leading-tight mx-4 my-4">
      BitNeuron is founded by a group of high profile researchers and engineers.
    </p>
    <div className="grid md:grid-cols-3 gap-14 place-items-center mt-4 sm:mt-12">
      {teamMemberCards}
    </div>
  </div>
);

export default Team;
