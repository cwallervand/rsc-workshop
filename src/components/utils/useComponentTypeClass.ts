"use client";

import { useEffect, useState } from "react";
import { componentTypeClass as ctc } from "./componentTypeUtils";

export const useComponentTypeClass = () => {
  const [componentTypeClass, setComponentTypeClass] =
    useState<string>("server");

  useEffect(() => {
    setComponentTypeClass(ctc);
  }, []);

  return componentTypeClass;
};
