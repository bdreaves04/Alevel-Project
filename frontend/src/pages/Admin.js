import React from "react";
import { Card } from "react-bootstrap";

import CreateMatchCard from "../components/AdminPage/CreateMatchCard";
import UpdateMatchCard from "../components/AdminPage/UpdateMatchCard";
import CreateAthleteCard from "../components/AdminPage/CreateAthleteCard";
import UpdateAthleteCard from "../components/AdminPage/UpdateAthleteCard";

const Admin = () => {
  return (
    <div className="adminPage">
      <Card className="adminCards overflow-auto">
        <CreateMatchCard />
      </Card>
      <Card className="adminCards overflow-auto">
        <UpdateMatchCard />
      </Card>
      <Card className="adminCards overflow-auto">
        <CreateAthleteCard />
      </Card>
      <Card className="adminCards overflow-auto">
        <UpdateAthleteCard />
      </Card>
    </div>
  );
};

export default Admin;
