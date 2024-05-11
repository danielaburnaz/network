import { Item } from "./Item";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { StyledBadge } from "./StyledBadge";
import Image from "next/image";
import noPhoto from "../../../public/icons/profile.svg";

export default function ContactsSection() {
  const friends: Array<string> = [
    "Johnny Bravo",
    "Albert Einstein",
    "Toomas Vooglaid",
    "Alexander Gustaffson",
    "Alex Volkanovski",
    "Kersti Kaljulaid",
  ];

  return (
    <Item
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "290px",
        height: "300px",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      }}
      radius="8px"
    >
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {friends.map((friend, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Image
                      style={{ width: "30px", height: "30px" }}
                      src={noPhoto}
                      alt="contacts"
                    />
                  </StyledBadge>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    ".MuiListItemText-primary": {
                      fontFamily: "Schoolbell, cursive",
                      fontSize: "19px",
                    },
                  }}
                  id={labelId}
                  primary={friend}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Item>
  );
}
