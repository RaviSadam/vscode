/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { MenuId } from 'vs/platform/actions/common/actions';

export const enum TerminalChatCommandId {
	Start = 'workbench.action.terminal.chat.start',
	Hide = 'workbench.action.terminal.chat.close',
	MakeRequest = 'workbench.action.terminal.chat.makeRequest',
	Cancel = 'workbench.action.terminal.chat.cancel',
	FeedbackHelpful = 'workbench.action.terminal.chat.feedbackHelpful',
	FeedbackUnhelpful = 'workbench.action.terminal.chat.feedbackUnhelpful',
	FeedbackReportIssue = 'workbench.action.terminal.chat.feedbackReportIssue',
	RunCommand = 'workbench.action.terminal.chat.runCommand',
	InsertCommand = 'workbench.action.terminal.chat.insertCommand',
	ViewInChat = 'workbench.action.terminal.chat.viewInChat',
}

export const MENU_TERMINAL_CHAT_INPUT = MenuId.for('terminalChatInput');
export const MENU_TERMINAL_CHAT_WIDGET = MenuId.for('terminalChatWidget');
export const MENU_TERMINAL_CHAT_WIDGET_STATUS = MenuId.for('terminalChatWidget.status');
export const MENU_TERMINAL_CHAT_WIDGET_FEEDBACK = MenuId.for('terminalChatWidget.feedback');
export const MENU_TERMINAL_CHAT_WIDGET_TOOLBAR = MenuId.for('terminalChatWidget.toolbar');
