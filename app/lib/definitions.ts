// @/app/lib/definitions.ts

/**
 * This file is used to declare your project's types
 */

// This is an example type for the template
// Delete this type
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
};
