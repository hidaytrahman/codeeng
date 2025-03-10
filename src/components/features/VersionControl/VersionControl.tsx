import React from 'react';

interface VersionControlSystem {
  name: string;
  description: string;
  installCommand: string;
  setupCommands: string[];
  website: string;
}

const versionControlSystems: VersionControlSystem[] = [
  {
    name: 'Git',
    description: 'Distributed version control system for tracking changes in source code',
    installCommand: 'brew install git  # For macOS\napt-get install git  # For Ubuntu/Debian\nchoco install git  # For Windows',
    setupCommands: [
      'git config --global user.name "Your Name"',
      'git config --global user.email "your.email@example.com"',
      'git config --global core.editor "code --wait"  # For VS Code',
      'git config --list  # Verify settings'
    ],
    website: 'https://git-scm.com/'
  },
  {
    name: 'GitHub CLI',
    description: 'Command-line tool for interacting with GitHub from your terminal',
    installCommand: 'brew install gh  # For macOS\napt-get install gh  # For Ubuntu/Debian\nchoco install gh  # For Windows',
    setupCommands: [
      'gh auth login  # Authenticate with GitHub',
      'gh config set editor "code --wait"  # Set default editor'
    ],
    website: 'https://cli.github.com/'
  }
];

export default function VersionControl() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Version Control Setup Guide</h1>
      <div className="grid gap-6">
        {versionControlSystems.map((system) => (
          <div key={system.name} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{system.name}</h2>
            <p className="text-gray-600 mb-4">{system.description}</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Installation</h3>
                <pre className="bg-gray-100 p-2 rounded block whitespace-pre-wrap">
                  {system.installCommand}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Setup Commands</h3>
                {system.setupCommands.map((command, index) => (
                  <code key={index} className="bg-gray-100 p-2 rounded block mb-2">
                    {command}
                  </code>
                ))}
              </div>
              <a
                href={system.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Official Documentation →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}