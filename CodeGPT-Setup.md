# CodeGPT Configuration Guide

## Setup Instructions

1. **Extension Installed**: ✅ CodeGPT extension is being installed
2. **API Key Added**: ✅ Your OpenAI API key is in the .env file

## Configuration Steps

### Method 1: Using VS Code Settings
1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "CodeGPT: Set API Key"
3. Paste your API key: `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`

### Method 2: Environment Variable (Recommended)
The extension should automatically detect the OPENAI_API_KEY environment variable from your .env file.

## How to Use CodeGPT

1. **Chat Interface**: 
   - Open Command Palette (`Ctrl+Shift+P`)
   - Type "CodeGPT: Open Chat"
   - Start chatting with AI

2. **Code Generation**:
   - Select code in editor
   - Right-click → "CodeGPT: Explain Code"
   - Or use "CodeGPT: Generate Code"

3. **Quick Actions**:
   - `Ctrl+Shift+P` → "CodeGPT: Optimize Code"
   - `Ctrl+Shift+P` → "CodeGPT: Find Bugs"
   - `Ctrl+Shift+P` → "CodeGPT: Add Comments"

## Keyboard Shortcuts (after installation)
- Open Chat: `Ctrl+Shift+C`
- Explain Code: `Ctrl+Shift+E`
- Generate Code: `Ctrl+Shift+G`

## Verification
To verify it's working:
1. Open any code file
2. Select some code
3. Right-click and look for CodeGPT options
4. Or use Command Palette and search "CodeGPT"