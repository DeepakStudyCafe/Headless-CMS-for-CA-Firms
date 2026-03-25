const fs = require('fs');
const path = require('path');

const srcDir = './websites/firm1-sharma/src/app/admin';
const destDir = './websites/Template-4/src/pages/admin';

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function convert(content) {
  let newContent = content.replace(/'use client';?\n?/g, '');
  newContent = newContent.replace(/"use client";?\n?/g, '');
  
  newContent = newContent.replace(/import \{ useRouter \} from 'next\/navigation'/g, "import { useNavigate } from 'react-router-dom'");
  newContent = newContent.replace(/import \{ useParams, useRouter \} from 'next\/navigation'/g, "import { useNavigate, useParams } from 'react-router-dom'");
  
  newContent = newContent.replace(/const router = useRouter\(\)/g, "const navigate = useNavigate()");
  newContent = newContent.replace(/router\.replace\((.*?)\)/g, "navigate($1, { replace: true })");
  newContent = newContent.replace(/router\.push\((.*?)\)/g, "navigate($1)");
  
  newContent = newContent.replace(/import Image from 'next\/image';?\n?/g, '');
  
  newContent = newContent.replace(/import Link from 'next\/link'/g, "import { Link } from 'react-router-dom'");
  newContent = newContent.replace(/href=\{`/g, "to={`");
  newContent = newContent.replace(/href="/g, "to=\"");
  newContent = newContent.replace(/href='/g, "to='");
  
  newContent = newContent.replace(/'sharma-associates'/g, "'template-4'");
  
  newContent = newContent.replace(/NEXT_PUBLIC_API_URL/g, "VITE_API_URL");
  newContent = newContent.replace(/process\.env\.VITE_API_URL/g, "(import.meta.env.VITE_API_URL || 'http://localhost:5000/api')");
  
  newContent = newContent.replace(/<Image[\s\S]*?src=\{([^}]+)\}[\s\S]*?alt=\{([^}]+)\}[\s\S]*?\/>/g, '<img src={$1} alt={$2} className="object-cover w-full h-full" />');
  
  return newContent;
}

const loginSrc = fs.readFileSync(path.join(srcDir, 'login/page.tsx'), 'utf8');
fs.writeFileSync(path.join(destDir, 'Login.tsx'), convert(loginSrc));

const dashboardSrc = fs.readFileSync(path.join(srcDir, 'dashboard/page.tsx'), 'utf8');
fs.writeFileSync(path.join(destDir, 'Dashboard.tsx'), convert(dashboardSrc));

if (!fs.existsSync(path.join(destDir, 'pages'))) fs.mkdirSync(path.join(destDir, 'pages'), { recursive: true });
const pageIdSrc = fs.readFileSync(path.join(srcDir, 'pages/[pageId]/page.tsx'), 'utf8');
fs.writeFileSync(path.join(destDir, 'pages/PageEditor.tsx'), convert(pageIdSrc));

console.log('Conversion completed successfully.');
