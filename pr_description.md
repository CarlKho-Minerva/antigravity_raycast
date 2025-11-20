# Antigravity Extension for Raycast

Control Google Antigravity IDE directly from Raycast with a streamlined set of commands for efficient project and file management.

## 🎬 Screencast

![raycast_antigravity-cvk demo](raycast_antigravity-cvk.gif)

## 📋 Description

This extension provides seamless integration between Raycast and Google Antigravity IDE, enabling developers to quickly access their projects, files, and workspace without leaving their keyboard.

## ✨ Features

- **Search Recent Projects** - Instantly access your recently opened Antigravity projects from the IDE's history
- **Open Project** - Browse and open any project from your configured project root directory
- **Open File/Folder** - Quick file and folder picker to open items directly in Antigravity
- **Open New Window** - Launch a new Antigravity window with a single command

## ⚙️ Configuration

The extension includes two optional preferences:

1. **Antigravity CLI Path** - Path to the Antigravity binary (defaults to `/Applications/Antigravity.app/Contents/Resources/app/bin/antigravity`)
2. **Project Root** - Directory containing your projects (defaults to `~/Documents`)

## ✅ Checklist

- [x] I read the extension guidelines
- [x] I read the documentation about publishing
- [x] I ran `npm run build` and tested this distribution build in Raycast
- [x] I checked that files in the assets folder are used by the extension itself
- [x] I checked that assets used by the README are placed outside of the metadata folder
- [x] All lint and build checks pass locally
- [x] CHANGELOG.md included

## 🔍 Testing

All commands have been thoroughly tested:
- ✅ Build passes (`npm run build`)
- ✅ Lint passes (`npm run lint`)
- ✅ All 4 commands compile and run successfully
- ✅ Recent projects integration works with Antigravity's internal database
- ✅ File/folder picker navigates correctly
- ✅ Project browser respects configured root directory

## 📦 Package Details

- **Dependencies**: `@raycast/api` (^1.84.0), `@raycast/utils` (^1.17.0)
- **Category**: Developer Tools
- **License**: MIT
- **Commands**: 4 focused commands for core functionality

## 🎯 Design Philosophy

This extension follows a "less is more" approach, providing only the most essential commands that developers use daily. The streamlined command set ensures a clean, focused user experience without feature bloat.

---

**Note**: This is my first Raycast extension submission. I'm excited to contribute to the Raycast community and am happy to address any feedback or requested changes!
