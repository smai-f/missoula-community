import {
  createSomaticPractices,
  createEvent,
  mgh,
  sixPm,
  MGHEvent,
} from "./utils";

/* UPDATE HERE */
const somaticPracticeDates: string[] = [
  "4/5/2021",
  "4/19/2021",
  "5/3/2021",
  "5/17/2021",
  "5/31/2021",
  "6/16/2021",
  "6/30/2021",
];
export const EVENTS: MGHEvent[] = [
  ...createSomaticPractices(somaticPracticeDates),
  createEvent(`${mgh} - intro`, "2/8/2021", sixPm),
  createEvent(`${mgh} - ch. 1-4`, "2/15/2021", sixPm),
  createEvent(`${mgh} - ch. 5-8`, "2/22/2021", sixPm),
  createEvent(`${mgh} - ch. 9-12`, "3/1/2021", sixPm),
  createEvent(`${mgh} - ch. 13-16`, "3/8/2021", sixPm),
  createEvent(`${mgh} - ch. 17-20`, "3/15/2021", sixPm),
  createEvent(`${mgh} - ch. 21-23`, "3/22/2021", sixPm),
  createEvent(`${mgh} - closing`, "3/29/2021", sixPm),
  createEvent("Shame and Guilt Discussion", "4/12/2021", sixPm),
  createEvent("Racist Violence Image Discussion", "4/26/2021", sixPm),
  createEvent("Peer Circle Discussion", "5/10/2021", sixPm),
  createEvent("Inquiry Practice", "5/24/2021", sixPm),
  createEvent("Triad Discussion & Practice - Blocks", "6/9/2021", sixPm),
  createEvent(
    "Being White Settlers on Unrightfully Taken Indigenous Land",
    "6/23/2021",
    sixPm
  ),
];
