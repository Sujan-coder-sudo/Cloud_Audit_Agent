# **App Name**: SecOps AI Dashboard

## Core Features:

- Home Page: Home page with a modern hero section, intro text, and call-to-action buttons to launch the agent or view the dashboard.
- About Us Page: About Us page with a team showcase grid, circular photo placeholders, names, roles, short bios, and GitHub/LinkedIn icons for each team member.
- How to Use Page: How to Use page with step-by-step install and usage instructions for local setup, copy-to-clipboard code blocks, and a quick-start diagram or GIF.
- Dashboard Page: Dashboard layout with a 2-column split: a sidebar with navigation options (Run Audit, View Logs, Agent Chat, Upload Configs) and a main content area for running audits, displaying agent responses, and visualizing audit results.
- Run Audit: Run Kubernetes or Docker Audit based on provided configurations and commands, leveraging the AI Agent for security analysis.
- Agent Response Display: Display AI Agent responses in a streaming format within the dashboard, providing real-time feedback and suggestions.
- Suggest Fixed Version: Suggest fixes using the LLM tool by reading K8s manifests, Dockerfiles, and compose YAMLs.

## Style Guidelines:

- Primary color: Deep, cool indigo (#4F46E5) to convey trust and technical expertise in security operations.
- Background color: Dark, desaturated indigo (#28243D) to provide a techy dark mode interface with sufficient contrast.
- Accent color: Vibrant, analogous violet (#8B5CF6) for interactive elements and highlights, drawing the user's eye.
- Body font: 'Inter', a sans-serif, with a modern, machined, objective, neutral look.
- Headline font: 'Space Grotesk', a sans-serif font with a computerized, techy, scientific feel.
- Lucide-react icons for a consistent and clean visual language throughout the dashboard.
- Dashboard layout with a clear separation between navigation (sidebar) and content (main area) to improve user orientation and workflow.
- Subtle toast notifications for successful actions and warnings in red cards to provide real-time user feedback.