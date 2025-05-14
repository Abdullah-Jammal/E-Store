"use client"
import { actionType } from "@/utils/types";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

interface FormProps {
  children: React.ReactNode;
  action: actionType
}

const initialState = {
  message: "",
}

function FormContainer({ children, action }: FormProps) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if(state.message) {
      toast.success("", {
        description : state.message
      })
    }
  },[state])
  return (
    <form action={formAction}>{children}</form>
  );
}

export default FormContainer;
