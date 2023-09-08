# Concept explanation

| Concept         | Meaning                                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| Model           | A device or data template; after creating a model, assets can be quickly added in batches; models support hierarchical inheritance, where parent models can pull data points from child models. |
| Asset           | The instantiation of a model; if it's a device model, assets correspond to device assets; if it's an abstract model, assets correspond to model instances; customers can add assets and their data points in batches in asset management. |
| Data Point      | The smallest data unit corresponding to data collection, set within models or assets, serving as the foundational data for the entire system. |
| Command         | Commands issued by the platform to devices, typically referring to data messages sent through data interfaces. |
| Compute Node    | Compute nodes are derived from data points, such as sum, average, maximum, and minimum values of collected data points; they also include computed values between data points and compute nodes, which are stored in a time-series database in real-time, becoming the latest nodes. |
| Alarm Rule      | Trigger conditions for abnormal occurrences of data points or compute nodes; alarm rules support basic alarm threshold settings and complex alarm rule settings (allowing custom formula definitions for data point alarm trigger conditions). |
| Event           | Events such as system startup, shutdown, command execution, and alarm triggers can be defined to determine system response strategies; users can be informed via SMS, phone calls, email, WeChat, or DingTalk, or functionality can be triggered through frontend scripts. |
| Data Dictionary | Defines system-wide variables, including numeric values, arrays, and object definitions; the data dictionary can be used as global data in the system. |
| Screen          | A data visualization dashboard development tool that can implement layout, SVG drawing, pipeline, 3D model effects editing, chart editing, data analysis, style editing, event triggering, command triggering, and various other functionalities. |
| Layout Container| A fundamental layout component that enables flexible arrangement of lower-level components; component groups serve as layout containers, managing the layout of lower-level components uniformly. |
| Data View       | A fundamental data component that can pass data to lower-level components; real-time data components, historical data components, asset views, and worksheet views can all serve as data views, allowing lower-level components to access data views for various data presentation effects. |
| Worksheet       | A tool for table creation, deletion, modification, and querying; it can synchronize with database tables or define data tables independently; worksheets can perform online data manipulation. |
| Screen Master   | The system has default front-end pages; by selecting a screen master, front-end screens can override default pages to achieve custom front-end display effects. |
