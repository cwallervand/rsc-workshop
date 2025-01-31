"use client";

import { useEffect, useState } from "react";
import { getComponentTypeClass } from "./component-type-utils";

export function useComponentTypeClass(): string {
  const [componentTypeClass, setComponentTypeClass] = useState<string>("");

  useEffect(() => {
    setComponentTypeClass(getComponentTypeClass);
  }, []);

  return componentTypeClass;
}
