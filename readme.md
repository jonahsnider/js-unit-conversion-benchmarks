# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 14 Jun 2025 10:13:55 GMT with Node.js v22.16.0 (V8 v12.4.254.21-node.26) on fv-az1693-898 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (420%)        | `220`ns (440%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `411`ns (822%)        | `411`ns (822%)                 | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `461`ns (922%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `572`ns (1,144%)      | `591`ns (1,182%)               | `1,748,252`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,092`ns (2,184%)    | `1,102`ns (2,204%)             | `915,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,065`ns (4,130%)    | `2,085`ns (4,170%)             | `484,262`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `511`ns (100%)        | `590`ns (115%)                 | `1,956,947`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,282`ns (251%)      | `1,403`ns (275%)               | `780,031`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,551`ns (5,000%)   | `27,487`ns (5,379%)            | `39,137`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (183%)        | `110`ns (183%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (250%)        | `150`ns (250%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `220`ns (367%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `441`ns (735%)        | `451`ns (752%)                 | `2,267,574`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,145`ns (3,575%)    | `2,165`ns (3,608%)             | `466,200`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `511`ns (1,022%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,122`ns (2,244%)    | `1,132`ns (2,264%)             | `891,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,977`ns (5,954%)    | `2,997`ns (5,994%)             | `335,909`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `230`ns (115%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (140%)        | `281`ns (141%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
