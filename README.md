# Markdown Table Editor

A VSCode extension for visually editing markdown tables.

## Features

This extension provides functionality for easily editing tables in markdown files:

- **Create new tables**: Quickly create new markdown tables with customizable dimensions
- **Visual interface**: Edit existing markdown tables with an intuitive visual editor
- **Table management**: Add and remove rows and columns
- **Content editing**: Edit cell contents directly
- **Table formatting**: Automatic formatting and alignment
- **Multiple access methods**: Command palette and right-click context menu

![screenshot](docs/screenshot.webp)

## Usage

### Editing Existing Tables

1. Open a markdown file
2. Place your cursor on the first row of a table, and a "📝" button will appear on the left side of the table
3. Click the button
4. Edit the table in the displayed editor
5. Click the "Save" button to apply your changes to the markdown file

### Creating New Tables

#### Method 1: Command Palette
1. Open a markdown file (`.md`, `.markdown`, `.mdown`, or `.mkdn`)
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette
3. Type "Create New Table" and select the command
4. Enter the number of columns (1-20)
5. Enter the number of rows (1-50)
6. The table will be inserted at the cursor position and the editor will open automatically

#### Method 2: Right-Click Context Menu
1. Open a markdown file
2. Right-click at the position where you want to insert the table
3. Select "Create New Table" from the context menu
4. Follow the same steps as above

## Known Issues

- Performance may decrease when editing very large tables

## Release Notes

[CHANGELOG.md](./CHANGELOG.md)

## License

[MIT](LICENSE.txt)
