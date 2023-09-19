import React from "react";
import { WordOrdinal } from "../src/index.js";

export default {
	component: WordOrdinal,
	title: "WordOrdinal",
};

export const Default = (args) => (
	<WordOrdinal number={args.number} shouldBeTitleCase={args.shouldBeTitleCase} />
);
