
type Foo =  {
    kind: 'foo',
    payload?: any
}

type Bar =  {
    kind: 'bar',
    payload?: any
}

type FooBar = Foo | Bar;

function isAction( action: unknown ): action is FooBar {
  return typeof action === 'object' && action !== null && 'kind' in action;
}
// Externally-visible signature
function throwBadAction(p: never): never;
// Implementation signature
function throwBadAction(p: FooBar) {
    throw new Error('Unknown pet kind: ' + p.kind);
}

export function doSomething(action:unknown): FooBar | undefined {
    if (!isAction(action)) {
        return undefined
    }
    
    switch (action.kind) {
        case "foo":
            return action;
        case "bar":
            return action;
        default:     
         return undefined;
    }    
}

export function doSomethingTight(action: FooBar): FooBar {
    switch (action.kind) {
        case "foo":
            return action;
        case "bar":
            return action;
        default:
            throwBadAction(action)
    }     
    
    
}

const a: Foo = {
    kind: "foo" as const
}

const b = doSomething(a)
const c = doSomethingTight(a)