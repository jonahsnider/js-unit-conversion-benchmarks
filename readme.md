# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 07 Jan 2024 19:15:59 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az665-402 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `200`ns (167%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `211`ns (176%)        | `412`ns (343%)                 | `4,739,336`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `242`ns (202%)        | `502`ns (418%)                 | `4,132,231`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `311`ns (259%)        | `662`ns (552%)                 | `3,215,434`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `522`ns (435%)        | `1,163`ns (969%)               | `1,915,709`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `682`ns (568%)        | `1,393`ns (1,161%)             | `1,466,276`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `682`ns (568%)        | `1,474`ns (1,228%)             | `1,466,276`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,244`ns (1,037%)    | `2,645`ns (2,204%)             | `803,859`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,577`ns (2,148%)    | `4,739`ns (3,949%)             | `388,048`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,479`ns (3,733%)    | `9,319`ns (7,766%)             | `223,264`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `902`ns (100%)        | `1,051`ns (117%)               | `1,108,647`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,423`ns (3,484%)   | `38,111`ns (4,225%)            | `31,824`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,911`ns (4,314%)   | `39,551`ns (4,385%)            | `25,700`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `222`ns (110%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (174%)        | `391`ns (194%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `512`ns (253%)        | `552`ns (273%)                 | `1,953,125`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (288%)        | `623`ns (308%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,243`ns (615%)      | `1,332`ns (659%)               | `804,505`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,332`ns (659%)      | `1,423`ns (704%)               | `750,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,659`ns (2,306%)    | `4,883`ns (2,417%)             | `214,638`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `231`ns (114%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (184%)        | `412`ns (204%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (223%)        | `512`ns (253%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,262`ns (625%)      | `1,353`ns (670%)               | `792,393`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,634`ns (809%)      | `1,785`ns (884%)               | `611,995`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,983`ns (2,962%)    | `6,135`ns (3,037%)             | `167,140`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,455`ns (3,196%)    | `6,735`ns (3,334%)             | `154,919`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `572`ns (100%)        | `652`ns (114%)                 | `1,748,252`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (105%)        | `672`ns (117%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `662`ns (116%)        | `762`ns (133%)                 | `1,510,574`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `350`ns (113%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `542`ns (174%)        | `602`ns (194%)                 | `1,845,018`/sec       |

<!-- endblock(results) -->
