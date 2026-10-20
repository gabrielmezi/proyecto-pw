export default function Aviso({ children, tono = "info" }) {
  return (
    <div className="rounded-sm border border-primary bg-primary-soft p-4 text-[13px] text-primary
    
    data-[tono=warning]:border-warning
    data-[tono=warning]:bg-[#FBF3E2]
    data-[tono=warning]:text-warning 
    data-[tono=danger]:border-danger
    data-[tono=danger]:bg-red-50
    data-[tono=danger]:text-danger
    data-[tono=success]:border-success
    data-[tono=success]:bg-green-50
    data-[tono=success]:text-success" data-tono={tono}>
      
      {children}
    </div>
  );
}
