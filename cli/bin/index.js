#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import { select, intro, outro, isCancel, cancel } from '@clack/prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const args = process.argv.slice(2);
  let selectedSkill = null;

  // Check for flag arguments
  if (args.includes('--minimalism') || args.includes('-m') || args.includes('minimalism')) {
    selectedSkill = 'minimalism';
  } else if (args.includes('--neobrutalism') || args.includes('-n') || args.includes('neobrutalism')) {
    selectedSkill = 'neobrutalism';
  }

  // Clear terminal screen for interactive mode
  if (!selectedSkill) {
    console.clear();
  }

  // 1. Display big ASCII logo banner "DESIGN.MD"
  const bannerText = figlet.textSync('DESIGN.MD', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });

  console.log('\n' + chalk.cyan.bold(bannerText) + '\n');
  console.log(chalk.gray('────────────────────────────────────────────────────────────'));

  // 2. Determine skill selection (interactive or via flag)
  if (!selectedSkill) {
    intro(chalk.bgCyan.black.bold(' Created by Akshat Malik'));

    selectedSkill = await select({
      message: 'Select a design skill bundle to install into your project (.agents/):',
      options: [
        {
          value: 'minimalism',
          label: 'Minimalism Design Skills',
          hint: 'Generally used for clean SaaS apps, dev tools, portfolios & modern tech dashboards',
        },
        {
          value: 'neobrutalism',
          label: 'Neobrutalism Design Skills',
          hint: 'Generally used for bold landing pages, Web3 apps, indie hacker products & vibrant retro brands',
        },
      ],
    });

    if (isCancel(selectedSkill)) {
      cancel('Installation cancelled.');
      process.exit(0);
    }
  } else {
    console.log(chalk.cyan(`Selected design skill: ${chalk.bold(selectedSkill)}`));
  }

  const templateDir = path.resolve(__dirname, '..', 'templates', selectedSkill, '.agents');
  const targetDir = path.resolve(process.cwd(), '.agents');

  if (!fs.existsSync(templateDir)) {
    console.error(chalk.red(`Error: Template directory not found at ${templateDir}`));
    process.exit(1);
  }

  // 3. Copy files to target project
  try {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.cpSync(templateDir, targetDir, { recursive: true, force: true });

    console.log('\n' + chalk.green.bold('✔ Skill bundle copied successfully into .agents/!'));
  } catch (err) {
    console.error(chalk.red(`Failed to copy skill files: ${err.message}`));
    process.exit(1);
  }

  // 4. Output post-installation prompt based on selected skill
  let promptText = '';

  if (selectedSkill === 'minimalism') {
    promptText =
      'Build this interface using the Minimalism skill bundle in .agents/. ' +
      'Read design.md, components.md, structure.md, and animation.md before coding. ' +
      'Follow their tokens, 4px spacing grid, hairline surfaces, accessibility floor, ' +
      'responsive rules, and reversible motion. Adapt the system to the existing project ' +
      'rather than introducing a second design system.';
  } else if (selectedSkill === 'neobrutalism') {
    promptText =
      'Build this interface using the Neobrutalism skill bundle in .agents/. ' +
      'Read design.md, components.md, structure.md, and animation.md before coding. ' +
      'Follow its flat palette, black 2px outlines, hard 4px offset shadows, physical press behavior, ' +
      'responsive rules, and reduced-motion guidance. Use strong scroll compositions only where ' +
      'they support the content, and adapt to the existing project.';
  }

  const boxedMessage = boxen(
    chalk.bold.yellow('📋 AI PROMPT (Copy & paste into your LLM / Cursor / Antigravity):\n\n') +
    chalk.white(promptText),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: selectedSkill === 'minimalism' ? 'cyan' : 'magenta',
      title: chalk.bold.green(` Next Steps: ${selectedSkill.toUpperCase()} `),
      titleAlignment: 'center',
    }
  );

  console.log(boxedMessage);

  outro(chalk.bold.green('All set! Happy building with ' + selectedSkill + '! 🚀'));
}

main().catch((err) => {
  console.error(chalk.red('An unexpected error occurred:'), err);
  process.exit(1);
});
