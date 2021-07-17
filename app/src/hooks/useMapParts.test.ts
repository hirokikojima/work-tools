/* eslint-disable jest/valid-title */
import React, { PropsWithChildren } from 'react'
import useMapParts from './useMapParts'

const testCategory = 'useMapParts'
const testCases = {
  case1: 'partTypes = children',
  case2: 'partTypes < children',
  case3: 'partTypes > children',
  case4: 'partTypes is empty.',
  case5: 'children is empty',
}

type ChildComponentProps = PropsWithChildren<{}>
const ChildComponent1 = (props: ChildComponentProps) => React.createElement('span', props, 'ChildComponent1')
const ChildComponent2 = (props: ChildComponentProps) => React.createElement('span', props, 'ChildComponent2')
const ChildComponent3 = (props: ChildComponentProps) => React.createElement('span', props, 'ChildComponent3')

describe(testCategory, () => {
  test(testCases.case1, () => {
    const partTypes = [
      ChildComponent1,
      ChildComponent3,
    ]

    const children = [
      React.createElement(ChildComponent1, {children: 'grand child1'}),
      React.createElement(ChildComponent2, {children: 'grand child2'}),
      React.createElement(ChildComponent3, {children: 'grand child3'}),
    ]

    const result = useMapParts(partTypes, children)
    const [ grandChild1, grandChild2 ] = result

    expect(result.length).toBe(2)
    expect(grandChild1).toBe('grand child1')
    expect(grandChild2).toBe('grand child3')
  })

  test(testCases.case2, () => {
    const partTypes = [
      ChildComponent1,
      ChildComponent2,
    ]

    const children = [
      React.createElement(ChildComponent1, {children: 'grand child1'}),
      React.createElement(ChildComponent2, {children: 'grand child2'}),
    ]

    const [ grandChild1, grandChild2 ] = useMapParts(partTypes, children)

    expect(grandChild1).toBe('grand child1')
    expect(grandChild2).toBe('grand child2')
  })

  test(testCases.case3, () => {
    const partTypes = [
      ChildComponent1,
      ChildComponent2,
      ChildComponent3,
    ]

    const children = [
      React.createElement(ChildComponent2, {children: 'grand child2'}),
      React.createElement(ChildComponent3, {children: 'grand child3'}),
    ]

    const result = useMapParts(partTypes, children)
    const [ grandChild1, grandChild2 ] = result

    expect(result.length).toBe(2)
    expect(grandChild1).toBe('grand child2')
    expect(grandChild2).toBe('grand child3')
  })

  test(testCases.case4, () => {
    
  })

  test(testCases.case5, () => {
    
  })
})