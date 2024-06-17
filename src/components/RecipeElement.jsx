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
  return (
    <Card
      color="transparent"
      className="hover w-full cursor-pointer border-2 p-5 transition hover:border-blue-gray-400 hover:shadow-none"
      onClick={() => navigate(`/${id}`)}
    >
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="flex items-center gap-4 pb-8 pt-0"
      >
        <Avatar
          size="lg"
          variant="circular"
          src={
            user?.photoURL
              ? user.photoURL
              : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          }
          alt={user?.displayName}
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography
              className="!line-clamp-1 whitespace-nowrap"
              variant="h5"
              color="blue-gray"
            >
              {user?.displayName}
            </Typography>
          </div>
          <Typography color="blue-gray">{title}</Typography>
        </div>
        <span className="flex w-full justify-end gap-2">
          <ClockIcon width="20" />
          <span>{cookingTime} daqiqa</span>
        </span>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography className="!line-clamp-3">{method}</Typography>
      </CardBody>
    </Card>
  );
}
