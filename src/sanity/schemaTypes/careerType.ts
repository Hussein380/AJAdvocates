import { defineField, defineType } from "sanity";

export const careerType = defineType({
  name: "career",
  title: "Career",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: ["Litigation", "Conveyancing", "Corporate Law", "Tax Law", "Administration"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Nairobi, Kenya",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: ["Full-time", "Part-time", "Contract", "Internship"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
