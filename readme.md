# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 23 Nov 2026 15:29:01 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 AMD EPYC 9V45 96-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `30`ns (100%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `71`ns (237%)         | `100`ns (333%)                 | `14,084,507`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (267%)         | `80`ns (267%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `90`ns (300%)         | `90`ns (300%)                  | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `151`ns (503%)        | `160`ns (533%)                 | `6,622,517`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `211`ns (703%)        | `220`ns (733%)                 | `4,739,336`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `260`ns (867%)        | `261`ns (870%)                 | `3,846,154`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `271`ns (903%)        | `281`ns (937%)                 | `3,690,037`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `590`ns (1,967%)      | `601`ns (2,003%)               | `1,694,915`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,082`ns (3,607%)    | `1,102`ns (3,673%)             | `924,214`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `200`ns (100%)        | `220`ns (110%)                 | `5,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `661`ns (331%)        | `741`ns (371%)                 | `1,512,859`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `10,255`ns (5,128%)   | `10,639`ns (5,320%)            | `97,513`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `90`ns (225%)         | `90`ns (225%)                  | `11,111,111`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `140`ns (350%)        | `150`ns (375%)                 | `7,142,857`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `271`ns (678%)        | `281`ns (703%)                 | `3,690,037`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,102`ns (2,755%)    | `1,121`ns (2,803%)             | `907,441`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `30`ns (100%)                  | `33,333,333`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (267%)         | `81`ns (270%)                  | `12,500,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `90`ns (300%)                  | `11,111,111`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `100`ns (333%)        | `100`ns (333%)                 | `10,000,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `280`ns (933%)        | `291`ns (970%)                 | `3,571,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (2,103%)      | `651`ns (2,170%)               | `1,584,786`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,603`ns (5,343%)    | `1,632`ns (5,440%)             | `623,830`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `140`ns (117%)        | `150`ns (125%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `171`ns (143%)        | `181`ns (151%)                 | `5,847,953`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `60`ns (150%)         | `100`ns (250%)                 | `16,666,667`/sec      |

<!-- endblock(results) -->
