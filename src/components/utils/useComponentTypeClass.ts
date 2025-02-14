"use client";

import { useEffect, useState } from "react";
import { getComponentTypeClass } from "./componentTypeUtils";

export const useComponentTypeClass = () => {
  const [componentTypeClass, setComponentTypeClass] =
    useState<string>("server");

  useEffect(() => {
    setComponentTypeClass(getComponentTypeClass);
  }, []);

  return componentTypeClass;
};
