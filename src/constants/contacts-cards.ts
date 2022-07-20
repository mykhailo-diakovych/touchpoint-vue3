enum ContactsCards {
  NOTE = "NOTE",
  TASK = "TASK",
  DEAL = "DEAL",
  TICKET = "TICKET",
  REMINDER = "REMINDER",
  EMAIL_CAMPAIGN = "EMAIL_CAMPAIGN",
}

export interface ContactsCardItem {
  title: string;
  icon: string;
}

export const CONTACTS_CARDS: Record<ContactsCards, ContactsCardItem> = {
  [ContactsCards.NOTE]: {
    title: "Note",
    icon: "",
  },
  [ContactsCards.TASK]: {
    title: "Task",
    icon: "tasks",
  },
  [ContactsCards.DEAL]: {
    title: "Deal",
    icon: "deals",
  },
  [ContactsCards.TICKET]: {
    title: "Ticket",
    icon: "tickets",
  },
  [ContactsCards.REMINDER]: {
    title: "Reminder",
    icon: "",
  },
  [ContactsCards.EMAIL_CAMPAIGN]: {
    title: "Email Campaign",
    icon: "campaigns",
  },
};
