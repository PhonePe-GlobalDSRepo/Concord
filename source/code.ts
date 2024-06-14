import * as VariantManager from "./variant_manager"
import * as HandOffManager from "./handoff_manager"
import * as ReportManager from "./lintReport_manager"

figma.showUI(__html__, { width: 320, height: 600 });

figma.ui.onmessage = msg => {
    if (msg.type == "handoff") {
        figma.notify("Generating Handoff ...")
        const shouldSkipComponentChildrenTraversal = msg.skipComponent;
        const generateForAll = msg.generateHOffForAll;
        const updatePreviousHandoff = msg.updatePreviousHandoff;
        const handOffOnNewPage = msg.handOffOnNewPage;
        const showTokens = msg.showTokens;
        const showStyles = msg.showStyles;
        const showVariables = msg.showVariables;
        const showRawData = msg.showRawData;
        const showLintData = msg.showLintData;
        // const maxDepth = msg.maxDepth;
        HandOffManager.generateHandoff({
            skipComponentChildrenTraversal: shouldSkipComponentChildrenTraversal,
            generateForAll: generateForAll,
            updatePreviousHandoff: updatePreviousHandoff,
            handOffOnNewPage: handOffOnNewPage,
            showTokens: showTokens,
            showStyles: showStyles,
            showVariables: showVariables,
            maxDepth: 2,
            showRawData: showRawData,
            showLintData: showLintData 
        })
    }
    else if (msg.type == "variants") {
        figma.notify("Generating Variants ...")
        VariantManager.generateVariants();
    } 
    else if (msg.type == "lintCheck"){
        figma.notify("Generating Lint Report ...")
        const shouldSkipComponentChildrenTraversal = msg.skipComponent;
        const generateForAll = msg.generateReportForAll;
        const updatePreviousReport = msg.updatePreviousReport;
        const reportOnNewPage = msg.reportOnNewPage;  
        ReportManager.generateReport({
            skipComponentChildrenTraversal: shouldSkipComponentChildrenTraversal,
            generateForAll: generateForAll,
            updatePreviousReport: updatePreviousReport,
            reportOnNewPage: reportOnNewPage
        })     
    }
}