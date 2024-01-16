# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 16 Jan 2024 02:04:36 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az775-872 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `221`ns (199%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `221`ns (199%)        | `461`ns (415%)                 | `4,524,887`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `261`ns (235%)        | `582`ns (524%)                 | `3,831,418`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `320`ns (288%)        | `691`ns (623%)                 | `3,125,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `522`ns (470%)        | `1,272`ns (1,146%)             | `1,915,709`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `673`ns (606%)        | `1,643`ns (1,480%)             | `1,485,884`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `673`ns (606%)        | `1,563`ns (1,408%)             | `1,485,884`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,233`ns (1,111%)    | `2,935`ns (2,644%)             | `811,030`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,625`ns (2,365%)    | `5,471`ns (4,929%)             | `380,952`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,479`ns (4,035%)    | `9,815`ns (8,842%)             | `223,264`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `812`ns (100%)        | `962`ns (118%)                 | `1,231,527`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,951`ns (3,935%)   | `38,623`ns (4,757%)            | `31,298`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,135`ns (4,820%)   | `39,807`ns (4,902%)            | `25,553`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `422`ns (210%)        | `472`ns (235%)                 | `2,369,668`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (234%)        | `522`ns (260%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `661`ns (329%)        | `712`ns (354%)                 | `1,512,859`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,352`ns (673%)      | `1,444`ns (718%)               | `739,645`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,544`ns (768%)      | `1,664`ns (828%)               | `647,668`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,991`ns (2,483%)    | `5,251`ns (2,612%)             | `200,361`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `220`ns (110%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (186%)        | `431`ns (215%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (206%)        | `481`ns (240%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,203`ns (602%)      | `1,423`ns (712%)               | `831,255`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,604`ns (802%)      | `1,994`ns (997%)               | `623,441`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,703`ns (2,852%)    | `6,083`ns (3,042%)             | `175,346`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,935`ns (2,968%)    | `7,075`ns (3,538%)             | `168,492`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `641`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (105%)        | `663`ns (116%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (118%)        | `752`ns (132%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `340`ns (113%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (176%)        | `582`ns (193%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
