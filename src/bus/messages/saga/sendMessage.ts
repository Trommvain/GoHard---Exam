// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const sendMessageAction = createAction<userMessage>(`${sliceName}/SEND_MESSAGE_ASYNC`);

// Types
import { Message, userMessage } from '../types';

// Saga
const sendMessage = (callAction: ReturnType<typeof sendMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/messages`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload),
        }),
    },
    succes: function* (result) {
        yield put(messagesActions.addMessage(result));
    },
});

// Watcher
export function* watchSendMessage(): SagaIterator {
    yield takeLatest(sendMessageAction.type, sendMessage);
}
