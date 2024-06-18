import { ClockIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function RecipeElement({ id, user, method, title, cookingTime }) {
  const navigate = useNavigate();
  const userName =
    user?.displayName.split(" ").length > 1
      ? `${user?.displayName.split(" ")[0]} ${user?.displayName.split(" ")[1]}`
      : user?.displayName.split(" ")[0];
  return (
    <Card
      color="transparent"
      className="hover w-full cursor-pointer border-2 p-5 transition hover:border-blue-gray-400 hover:shadow-none lg:p-7"
      onClick={() => navigate(`/${id}`)}
    >
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="m-0 flex flex-col gap-4 pb-2 pt-0 lg:gap-5 lg:pb-5"
      >
        <div className="flex items-center gap-5">
          <Avatar
            className="h-10 w-10 lg:h-16 lg:w-16"
            variant="circular"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            }
            alt={user?.displayName}
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center">
              <Typography
                className="!line-clamp-1 text-ellipsis whitespace-nowrap text-base lg:text-lg"
                variant="h5"
                color="blue-gray"
              >
                {userName}
              </Typography>
            </div>
            <Typography className="text-xs lg:text-base" color="blue-gray">
              {title}
            </Typography>
          </div>
        </div>
        <span className="flex w-full justify-start gap-2 text-xs lg:text-sm">
          <ClockIcon width="20" />
          <span>{cookingTime} daqiqa</span>
        </span>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography className="!line-clamp-3 text-sm lg:text-sm">
          {method}
        </Typography>
      </CardBody>
    </Card>
  );
}
