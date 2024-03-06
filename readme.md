# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 06 Mar 2024 18:57:33 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az692-50 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (267%)        | `341`ns (284%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (368%)        | `491`ns (409%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `631`ns (526%)        | `681`ns (568%)                 | `1,584,786`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,163`ns (969%)      | `1,232`ns (1,027%)             | `859,845`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (1,085%)    | `1,412`ns (1,177%)             | `768,049`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,443`ns (1,203%)    | `1,533`ns (1,278%)             | `693,001`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,625`ns (2,188%)    | `2,737`ns (2,281%)             | `380,952`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,571`ns (3,809%)    | `4,751`ns (3,959%)             | `218,771`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,359`ns (59,466%)  | `72,063`ns (60,053%)           | `14,014`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `811`ns (100%)        | `1,092`ns (135%)               | `1,233,046`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `34,111`ns (4,206%)   | `50,943`ns (6,282%)            | `29,316`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,415`ns (10,409%)  | `121,727`ns (15,009%)          | `11,846`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (224%)        | `370`ns (285%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (347%)        | `571`ns (439%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (408%)        | `662`ns (509%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (995%)      | `1,834`ns (1,411%)             | `773,395`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,411`ns (3,393%)    | `5,643`ns (4,341%)             | `226,706`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,479`ns (28,061%)  | `38,015`ns (29,242%)           | `27,413`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `151`ns (126%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (276%)        | `381`ns (318%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `460`ns (383%)        | `511`ns (426%)                 | `2,173,913`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,403`ns (1,169%)    | `1,513`ns (1,261%)             | `712,758`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,763`ns (1,469%)    | `1,944`ns (1,620%)             | `567,215`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,663`ns (5,553%)    | `7,203`ns (6,003%)             | `150,083`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,615`ns (66,346%)  | `80,255`ns (66,879%)           | `12,560`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `531`ns (110%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (110%)        | `581`ns (121%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `581`ns (121%)        | `642`ns (133%)                 | `1,721,170`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `241`ns (110%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (237%)        | `571`ns (260%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
