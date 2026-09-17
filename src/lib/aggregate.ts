export type Ingredient = {
  name: string;
  amount: number;
  category: string;
};

export type Menu = {
  id: string;
  name: string;
  checked: boolean;
  ingredients: Ingredient[];
};

export type Category = {
  id: string;
  label: string;
};

export type ListItem = {
  name: string;
  total: number;
  parts: number[];
};

export type ListGroup = {
  category: Category;
  items: ListItem[];
};

/**
 * Sum ingredients of the selected menus and group them by category.
 * Category order follows `categories`; item order follows first appearance.
 */
export function aggregate(
  menus: Menu[],
  categories: Category[],
  selectedIds: ReadonlySet<string>,
): ListGroup[] {
  const byCategory = new Map<string, Map<string, ListItem>>();

  for (const menu of menus) {
    if (!selectedIds.has(menu.id)) continue;
    for (const { name, amount, category } of menu.ingredients) {
      let items = byCategory.get(category);
      if (!items) {
        items = new Map();
        byCategory.set(category, items);
      }
      const item = items.get(name);
      if (item) {
        item.total += amount;
        item.parts.push(amount);
      } else {
        items.set(name, { name, total: amount, parts: [amount] });
      }
    }
  }

  return categories
    .filter((category) => byCategory.has(category.id))
    .map((category) => ({
      category,
      items: [...byCategory.get(category.id)!.values()],
    }));
}

// Non-breaking space keeps the number and unit on one line.
export const formatAmount = (grams: number): string => `${grams}\u00a0g`;

export const formatParts = (parts: number[]): string =>
  parts.map(formatAmount).join(' + ');

export const initialSelection = (menus: Menu[]): Set<string> =>
  new Set(menus.filter((menu) => menu.checked).map((menu) => menu.id));
