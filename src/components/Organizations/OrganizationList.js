import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";

const OrganizationList = ({ organizationList, setActiveOrganization }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (organization) => {
    setActiveOrganization(organization.key);
    setSelected(organization.key);
  };

  return (
    <List>
      {organizationList.map((organization) => (
        <ListItem key={organization.key}>
          <ListItemButton
            onClick={() => handleClick(organization)}
            selected={selected === organization.key}
          >
            <ListItemText
              primary={organization.name}
              key={organization.key}
              style={{ cursor: "pointer" }}
            ></ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default OrganizationList;
