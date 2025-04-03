# ml-research-blog

A full-stack blog built in Next.js with TypeScript and React to share and highlight research on machine learning and its applications to neurological disorder diagnoses. This open-source blog is designed to be educational and collaborative, with a two-folded vision of developing early detection systems for neurological disorders like Alzheimer's and ALS as well as providing an accessible ecosystem for learning machine learning.

Note 2025.04.03: This project is still early in development. 

## Vision & Mission

This project aims to:

1. **Advance early detection systems** for neurological disorders through machine learning approaches
2. **Create an accessible learning ecosystem** for those interested in ML and neuroscience
3. **Foster collaboration** between researchers, developers, healthcare professionals, and patients
4. **Provide open-source tools and resources** to accelerate research in this domain

## Technical Stack

- **Frontend**: Next.js 14 with App Router, React, TypeScript
- **Styling**: Tailwind CSS
- **Content Management**: Sanity CMS with custom components
- **Deployment**: Vercel
- **Version Control**: GitHub

## Features

- **Interactive Blog Posts**: MDX-powered content with embedded React components
- **Research Documentation**: Structured documentation of ML methodologies for neurological disorder detection
- **Code Demonstrations**: Interactive code examples and visualizations
- **GitHub Integration**: Direct connections to open-source repositories
- **User-Focused Pathways**: Specialized content paths for academic researchers, developers, healthcare professionals, and patients/families

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cameronbrady1527/ml-research-blog.git
   cd ml-research-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables (you will have to add Sanity to this... [LINK TO BE PROVIDED HERE]):
   ```
   # Create a .env.local file with:
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-08-01
   ```
   Note: the `/sanity` and `/studio` files in the project are added on setting up Sanity to the project.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/
├── app/                 # App Router components and routes
├── components/          # Reusable UI components
├── sanity/              # Sanity CMS configuration
│   ├── schemas/         # Content type definitions
│   └── lib/             # Sanity utility functions
├── lib/                 # Utility functions and shared code
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Content Management

This blog uses Sanity CMS with custom blocks for interactive content. The Sanity Studio is embedded in the application, accessible at `/studio`.

### Adding a New Blog Post

1. Navigate to `/studio` in the deployed application
2. Click on "Blog Posts" in the left sidebar
3. Click "Create new" button
4. Fill in the post details and content
5. Use the content editor to add text, images, code examples, and interactive components
6. Preview your post before publishing
7. Publish when ready

## Contribution Guidelines

Contributors are encouraged to create and share educational resources on the blog, as well as contribute to any projects found on the blog.

### How to Contribute

1. **Submit Content**: Create educational content, tutorials, or research findings
2. **Improve Codebase**: Enhance the blog's functionality or fix bugs
3. **Add Visualizations**: Create interactive components to explain complex ML or neurological concepts
4. **Research Collaboration**: Contribute to the underlying research projects
5. **UNTIL FURTHER NOTICE**: If you would like to add a research post, message me via the site with the content and I will upload it. Please send: article title, author name, a picture to go with your name (if desired), description of article, tags (if desired), and body (including pictures). If you are comfortable doing so, you may share a Google Document with my email, so that I may easily preserve the structure and style of the post content. Thank you!

### Contribution Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or want to discuss collaboration opportunities, please reach out through:

- GitHub Issues: [https://github.com/cameronbrady1527/ml-research-blog/issues](https://github.com/cameronbrady1527/ml-research-blog/issues)
- GitHub Profile: [https://github.com/cameronbrady1527](https://github.com/cameronbrady1527)

## Acknowledgments

- Research partners and contributors
- Open-source libraries and tools that make this project possible
- The healthcare and ML communities for ongoing inspiration and support