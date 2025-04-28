export function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      {/* 直接用 img，会触发 next/no-img-element 警告 */}
      <img src="/logo.png" alt="Logo" />
    </div>
  );
}

export function About() {
  return (
    <div>
      <a href="/contact">Go to Contact</a>
      {/* 应该用 next/link 包裹 */}
    </div>
  );
}


export function ScriptTest() {
    return (
      <div>
        <script src="https://example.com/analytics.js" />
        {/* 应该用 next/script 组件，不应该直接用 script 标签 */}
      </div>
    );
  }