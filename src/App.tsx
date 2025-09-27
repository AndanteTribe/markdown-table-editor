import { Table } from './components/Table';
import { TableData} from './types/table';

// EditableTableData型を定義
interface EditableTableData {
  rows: {
    id: string;
    cells: { id: string; value: string }[];
  }[];
  columns: {
    id: string;
    index: number;
    width: string;
    align?: string; // 文字揃え情報
  }[];
}

// Appコンポーネントのprops型を定義
interface AppProps {
  tableData: EditableTableData | null;
  onSaveTable: (markdown: string) => void;
  onAutoSave?: (markdown: string) => void; // 自動保存用のコールバック
}

// EditableTableDataをTableDataに変換する関数
const convertToTableData = (editableData: EditableTableData): TableData => {
  return editableData.rows.map(row => 
    row.cells.map((cell, index) => ({
      value: cell.value,
      isEditing: false,
      width: 100, // デフォルト幅
      align: editableData.columns[index]?.align || 'left' // 文字揃え情報
    }))
  );
};

function App({ tableData, onSaveTable, onAutoSave }: AppProps) {
  // テーブルデータがない場合は読み込み中を表示
  if (!tableData) {
    return <div className="loading">テーブルデータを読み込み中...</div>;
  }

  // EditableTableDataをTableDataに変換
  const convertedTableData = convertToTableData(tableData);

  return (
    <div className="app">
      <Table 
        initialData={convertedTableData} 
        onSave={onSaveTable}
        onAutoSave={onAutoSave}
      />
    </div>
  )
}

export default App
