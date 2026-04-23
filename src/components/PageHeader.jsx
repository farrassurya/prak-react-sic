export default function PageHeader({ title = "Dashboard", breadcrumb = [], children = null }) {
  const breadcrumbItems = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">{title}</span>
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          {breadcrumbItems.length > 0 ? (
            breadcrumbItems.map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center space-x-2 text-gray-500">
                <span>{item}</span>
                {index < breadcrumbItems.length - 1 && <span className="text-gray-500">/</span>}
              </span>
            ))
          ) : (
            <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
          )}
        </div>
      </div>
      {children ? <div id="action-button">{children}</div> : null}
    </div>
  );
}
