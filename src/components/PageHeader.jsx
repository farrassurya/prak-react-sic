export default function PageHeader({ title = "Dashboard", breadcrumb = "Dashboard", children = null }) {
  // MODIFIED: Keep breadcrumb handling very simple (string or array)
  const breadcrumbText = Array.isArray(breadcrumb)
    ? breadcrumb.join(" / ")
    : breadcrumb;

  return (
    // UPDATED: Clean and responsive header layout
    <div id="pageheader-container" className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between">
      <div id="pageheader-left" className="min-w-0">
        {/* MODIFIED: Title now comes from props */}
        <h1 id="page-title" className="text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h1>

        {/* NEW: Simple breadcrumb display */}
        <p id="breadcrumb-links" className="mt-1 text-sm font-medium text-gray-500">
          {breadcrumbText}
        </p>
      </div>

      {/* MODIFIED: Action buttons are passed via children */}
      {children ? <div id="action-button" className="shrink-0">{children}</div> : null}
    </div>
  );
}
