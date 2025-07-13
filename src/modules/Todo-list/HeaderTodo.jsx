import {CheckSquare2Icon } from "lucide-react";
import React from "react";
import Container from "../../components/Container";

function HeaderToDo() {
  return (
    <Container>
      <div className="text-center mt-12 mb-8 animate-slide-down">
        <h1 className="text-4xl font-bold text-base-content mb-2 flex items-center justify-center gap-3">
          <CheckSquare2Icon className="h-10 w-10 text-primary" />
          ToDo-List
        </h1>
        <p className="text-base-content/70 text-lg">
          Helping you to organize your tasks cleanly
        </p>
      </div>
    </Container>
  );
}

export default HeaderToDo;