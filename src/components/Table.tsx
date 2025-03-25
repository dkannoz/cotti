/**
 * @fileoverview Table components from the Tremor UI framework.
 * A comprehensive set of table-related components for building data tables with
 * consistent styling and responsive behavior. These components follow a compound
 * component pattern to create accessible, well-structured HTML tables.
 */

// Tremor Table [v0.0.3]

import React from "react"

import { cx } from "@/lib/utils"

/**
 * @component TableRoot
 * @description Container component for the table that provides scrollable behavior on mobile devices.
 * This is the outermost wrapper that manages overflow and responsive behavior.
 * 
 * @example
 * <TableRoot>
 *   <Table>
 *     // Table contents
 *   </Table>
 * </TableRoot>
 */
const TableRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, forwardedRef) => (
  <div
    ref={forwardedRef}
  // Activate if table is used in a float environment
  // className="flow-root"
  >
    <div
      // make table scrollable on mobile
      className={cx("w-full whitespace-nowrap", className)}
      {...props}
    >
      {children}
    </div>
  </div>
))

TableRoot.displayName = "TableRoot"

/**
 * @component Table
 * @description The main table component that renders an HTML table element.
 * Provides base styling for the table structure with border and width configuration.
 * 
 * @example
 * <Table>
 *   <TableHead>...</TableHead>
 *   <TableBody>...</TableBody>
 * </Table>
 */
const Table = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...props }, forwardedRef) => (
  <table
    ref={forwardedRef}
    tremor-id="tremor-raw"
    className={cx(
      // base
      "w-full caption-bottom border-b",
      // border color
      "border-gray-200",
      className,
    )}
    {...props}
  />
))

Table.displayName = "Table"

/**
 * @component TableHead
 * @description Table header container that renders the thead HTML element.
 * Used to group header content in the table.
 * 
 * @example
 * <TableHead>
 *   <TableRow>
 *     <TableHeaderCell>Name</TableHeaderCell>
 *     <TableHeaderCell>Status</TableHeaderCell>
 *   </TableRow>
 * </TableHead>
 */
const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <thead ref={forwardedRef} className={cx(className)} {...props} />
))

TableHead.displayName = "TableHead"

/**
 * @component TableHeaderCell
 * @description Table header cell component that renders the th HTML element.
 * Used for column headers with appropriate styling and semantics.
 * 
 * @example
 * <TableHeaderCell>Column Title</TableHeaderCell>
 * 
 * @example
 * <TableHeaderCell className="text-right">Amount</TableHeaderCell>
 */
const TableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, forwardedRef) => (
  <th
    ref={forwardedRef}
    className={cx(
      // base
      "border-b px-4 py-3.5 text-left text-sm font-semibold",
      // text color
      "text-gray-900",
      // border color
      "border-gray-200",
      className,
    )}
    {...props}
  />
))

TableHeaderCell.displayName = "TableHeaderCell"

/**
 * @component TableBody
 * @description Table body container that renders the tbody HTML element.
 * Used to group the main content rows of the table with divider styling between rows.
 * 
 * @example
 * <TableBody>
 *   <TableRow>
 *     <TableCell>Data 1</TableCell>
 *     <TableCell>Data 2</TableCell>
 *   </TableRow>
 *   // More rows
 * </TableBody>
 */
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <tbody
    ref={forwardedRef}
    className={cx(
      // base
      "divide-y",
      // divide color
      "divide-gray-200",
      className,
    )}
    {...props}
  />
))

TableBody.displayName = "TableBody"

/**
 * @component TableRow
 * @description Table row component that renders the tr HTML element.
 * Applies consistent padding to first and last cells for alignment.
 * 
 * @example
 * <TableRow>
 *   <TableCell>Row data 1</TableCell>
 *   <TableCell>Row data 2</TableCell>
 * </TableRow>
 * 
 * @example
 * <TableRow className="bg-gray-50">
 *   // Highlighted row
 * </TableRow>
 */
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, forwardedRef) => (
  <tr
    ref={forwardedRef}
    className={cx(
      // Ensure consistent padding on edge cells
      "[&_td:last-child]:pr-4 [&_th:last-child]:pr-4",
      "[&_td:first-child]:pl-4 [&_th:first-child]:pl-4",
      className,
    )}
    {...props}
  />
))

TableRow.displayName = "TableRow"

/**
 * @component TableCell
 * @description Table cell component that renders the td HTML element.
 * Standard data cell with consistent padding and text styling.
 * 
 * @example
 * <TableCell>Cell content</TableCell>
 * 
 * @example
 * <TableCell className="font-medium">Emphasized cell</TableCell>
 */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, forwardedRef) => (
  <td
    ref={forwardedRef}
    className={cx(
      // base
      "p-4 text-sm",
      // text color
      "text-gray-600",
      className,
    )}
    {...props}
  />
))

TableCell.displayName = "TableCell"

/**
 * @component TableFoot
 * @description Table footer component that renders the tfoot HTML element.
 * Used for summary rows, totals, or other footer information with distinct styling.
 * 
 * @example
 * <TableFoot>
 *   <TableRow>
 *     <TableCell>Total</TableCell>
 *     <TableCell>$1,234.56</TableCell>
 *   </TableRow>
 * </TableFoot>
 */
const TableFoot = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => {
  return (
    <tfoot
      ref={forwardedRef}
      className={cx(
        // base
        "border-t text-left font-medium",
        // text color
        "text-gray-900",
        // border color
        "border-gray-200",
        className,
      )}
      {...props}
    />
  )
})

TableFoot.displayName = "TableFoot"

/**
 * @component TableCaption
 * @description Table caption component that renders the caption HTML element.
 * Provides accessible description or summary of the table content.
 * Positioned below the table by default with appropriate styling.
 * 
 * @example
 * <Table>
 *   <TableCaption>List of transactions for January 2023</TableCaption>
 *   // Table contents
 * </Table>
 */
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, forwardedRef) => (
  <caption
    ref={forwardedRef}
    className={cx(
      // base
      "mt-3 px-3 text-center text-sm",
      // text color
      "text-gray-500",
      className,
    )}
    {...props}
  />
))

TableCaption.displayName = "TableCaption"

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow
}

