import { describe, it, expect } from 'vitest'

describe('Table Generation', () => {
  // テーブル生成関数（テスト用にコピー）
  function generateNewTableMarkdown(rows: number, columns: number): string {
    const lines: string[] = [];
    
    // ヘッダー行を生成
    const headers = Array(columns).fill(0).map((_, i) => `Header${i + 1}`);
    lines.push(`| ${headers.join(' | ')} |`);
    
    // 区切り行を生成
    const separators = Array(columns).fill('---');
    lines.push(`| ${separators.join(' | ')} |`);
    
    // データ行を生成（ヘッダー行を除いた行数）
    for (let i = 0; i < rows - 1; i++) {
      const cells = Array(columns).fill('');
      lines.push(`| ${cells.join(' | ')} |`);
    }
    
    // 最後に改行を追加
    return lines.join('\n') + '\n';
  }

  it('2行3列のテーブルを正しく生成できること', () => {
    const result = generateNewTableMarkdown(2, 3);
    const expected = 
      `| Header1 | Header2 | Header3 |\n` +
      `| --- | --- | --- |\n` +
      `|  |  |  |\n`;
    
    expect(result).toBe(expected);
  });

  it('3行4列のテーブルを正しく生成できること', () => {
    const result = generateNewTableMarkdown(3, 4);
    const expected = 
      `| Header1 | Header2 | Header3 | Header4 |\n` +
      `| --- | --- | --- | --- |\n` +
      `|  |  |  |  |\n` +
      `|  |  |  |  |\n`;
    
    expect(result).toBe(expected);
  });

  it('最小サイズのテーブル（1行2列）を正しく生成できること', () => {
    const result = generateNewTableMarkdown(1, 2);
    const expected = 
      `| Header1 | Header2 |\n` +
      `| --- | --- |\n`;
    
    expect(result).toBe(expected);
  });

  it('ヘッダーが連番で生成されること', () => {
    const result = generateNewTableMarkdown(1, 5);
    expect(result).toContain('Header1');
    expect(result).toContain('Header2');
    expect(result).toContain('Header3');
    expect(result).toContain('Header4');
    expect(result).toContain('Header5');
  });

  it('データ行数がrows-1であること（ヘッダー行を除く）', () => {
    const result = generateNewTableMarkdown(4, 2);
    const lines = result.trim().split('\n');
    expect(lines.length).toBe(5); // ヘッダー行 + 区切り行 + 3データ行
    expect(lines[0]).toBe('| Header1 | Header2 |');
    expect(lines[1]).toBe('| --- | --- |');
    expect(lines[2]).toBe('|  |  |');
    expect(lines[3]).toBe('|  |  |');
    expect(lines[4]).toBe('|  |  |');
  });
});