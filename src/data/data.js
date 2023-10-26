const posts = [
  {
    id: 1,
    date: "03/10/2023",
    title: "Titulo del articulo",
    author: "Gustavo Sanchez",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
  {
    id: 2,
    date: "04/10/2023",
    title: "Titulo del articulo",
    author: "Alejandro Martinez",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
  {
    id: 3,
    date: "05/10/2023",
    title: "Titulo del articulo",
    author: "Marcos Medei",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
  {
    id: 4,
    date: "06/10/2023",
    title: "Titulo del articulo",
    author: "Miguel Marchetti",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
  {
    id: 5,
    date: "07/10/2023",
    title: "Titulo del articulo",
    author: "Gustavo Sanchez",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
  {
    id: 6,
    date: "08/10/2023",
    title: "Titulo del articulo",
    author: "Alejandro Martinez",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
  {
    id: 7,
    date: "09/10/2023",
    title: "Titulo del articulo",
    author: "Marcos Medei",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
  {
    id: 8,
    date: "10/10/2023",
    title: "Titulo del articulo",
    author: "Miguel Marchetti",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque. Etiam fringilla erat enim, eu egestas leo vulputate vitae.",
  },
];

export default posts;
