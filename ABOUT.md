### About this Demo

This Vue application demonstrates a **Call Flow** editor built with **VisuallyJS**. It allows users to design complex call flows using a drag-and-drop interface.

### VisuallyJS Components Used

The demo utilizes several components from the `@visuallyjs/browser-ui-vue` package:

- **SurfaceProvider**: Provides the VisuallyJS context for the application.
- **SurfaceComponent**: The main canvas where the call flow is rendered.
- **ControlsComponent**: Provides UI controls for the surface (zoom, undo/redo, etc.).
- **MiniviewComponent**: Displays a small navigation map of the surface.

### Component Options

The `SurfaceComponent` is configured with three main options objects:

- **renderOptions**: Configures how the surface and its elements are rendered.
- **viewOptions**: Defines how different types of nodes (e.g., "start", "dial", "menu") are displayed and how they behave.
- **modelOptions**: Configures the underlying data model, including how new nodes and edges are created.

### CSS Requirement

For the VisuallyJS components to render correctly, the standard VisuallyJS stylesheet must be included in the project. In this demo, it is imported in `src/main.ts`:

```typescript
import "@visuallyjs/browser-ui/css/visuallyjs.css"
```
